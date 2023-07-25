<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function all()
    {
        $user = User::orderBy('kecamatan', 'asc')->get();
        $respons = [
            'user' => $user,
            'message' => 'All User',
        ];
        return response()->json($respons);
    }
    public function index($name, $place)
    {
        $user = User::where($name, $place)->orderBy('kelurahan', 'asc')->paginate(15);
        $dictinct = User::select('kecamatan')->distinct()->get();
        return Inertia::render('ListUser', [
            'user' => $user,
            'distinct' => $dictinct
        ]);
    }
    public function dashboard()
    {
        $dictinct = User::select('kecamatan')->distinct()->get();
        $total = User::selectRaw('kecamatan, COUNT(*) as total')
            ->groupBy('kecamatan')
            ->pluck('total', 'kecamatan');

        return Inertia::render('Dashboard', [
            'distinct' => $dictinct,
            'total' => $total
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('AddUser');
    }

    /**
     * Handle an incoming registration request.
     *
     * throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'nik' => 'required|unique:users|min:16',
            'jenis_kelamin' => 'required',
            'provinsi' => 'required',
            'kabupaten' => 'required',
            'kecamatan' => 'required',
            'kelurahan' => 'required',
            'dusun' => 'required',
        ]);

        $user = new User;
        $user->id = Str::uuid();
        $user->nama = $request->nama;
        $user->nik = $request->nik;
        $user->jenis_kelamin = $request->jenis_kelamin;
        $user->provinsi = $request->provinsi;
        $user->kabupaten = $request->kabupaten;
        $user->kecamatan = $request->kecamatan;
        $user->kelurahan = $request->kelurahan;
        $user->dusun = $request->dusun;

        if ($user->save()) {
            return redirect()->back()->with('message', 'berhasil add new user');
        }
    }

    /**
     * Display the specified resource.
     */
    // public function show(User $user, $autor)
    // {
    //     $res = $user->where('autor',$autor)->get();
    //     return Inertia::render('ListUser',[
    //         'user'=>$res
    //     ]);    
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user, $id)
    {
        $res = $user->find($id);
        return Inertia::render('Edit', [
            'user' => $res
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user, $id)
    {
        $request->validate([
            'nama' => 'required',
            'nik' => 'required|min:16',
            'jenis_kelamin' => 'required|string',
            'kecamatan' => 'required|string',
            'kelurahan' => 'required|string',
            'dusun' => 'required',
        ]);
        $user = $user->find($id);

        $user->nama = $request->nama;
        $user->nik = $request->nik;
        $user->jenis_kelamin = $request->jenis_kelamin;
        $user->kecamatan = $request->kecamatan;
        $user->kelurahan = $request->kelurahan;
        $user->dusun = $request->dusun;

        if ($user->save()) {
            return redirect()->back()->with('message', 'berhasil update pendukung');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user, Request $request)
    {
        $request->validate([
            'nik' => 'required'
        ]);
        try {
            $res = $user->where('nik', $request->nik)->firstOrFail();
            $res->delete();
            return redirect()->back()->with('message', 'Pengguna berhasil dihapus');
        } catch (\Exception $err) {
            return redirect()->back()->with('message', 'Pengguna dengan NIK tersebut tidak ditemukan ');
        }
    }
}
