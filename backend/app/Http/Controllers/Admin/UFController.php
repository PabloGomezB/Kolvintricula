<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\UF;
use Illuminate\Http\Request;

class UFController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if(!isset($_GET['id'])){
            return redirect()->back();
        }

        $id = $_GET['id'];        
        return view('admin.uf.create',['uf'=> new UF,'id'=>$id]);      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_module' => 'required',
            'name' => 'required',
            'hours' => 'required',
            'year' => 'required',
            'description' => 'required',
        ]);

        $dataForm = request()->except('_token');
        UF::create($dataForm);

        return redirect()->back()
            ->with('success',$request->name. ': ' . $request->description. ' UF creada correctamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // theres no show, only edit
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('admin.uf.edit',['uf' => UF::findOrFail($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'id_module' => 'required',
            'name' => 'required',
            'hours' => 'requried',
            'year' => 'required',
        ]);

        $dataForm = request()->except('_token');
        UF::create($dataForm);

        return redirect()->back()
            ->with('success',$request->name. ': ' . $request->description. ' UF actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        UF::destroy($id);
        return redirect()->back()
                ->with('success','UF con id: '.$id.' eliminado correctamente.');
    }
}
