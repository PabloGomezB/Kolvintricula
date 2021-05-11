<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\Module;
use Illuminate\Http\Request;



class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['dataModules'] = Module::paginate(4);
        return view('admin.module.index',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.module.create',['module' => new Module]);
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
            'id_course' => 'required',
            'name' => 'required',
            'description' => 'required',
        ]);

        $dataForm = request()->except('_token');
        Module::create($dataForm);

        return redirect()->route('modules.index')
            ->with('success',$request->name.': '.$request->descrition .' Modulo creado correctamente.'); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('admin.module.show', ['module' => Module::findOrFail($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('admin.module.edit', ['module' => Module::findOrFail($id)]);
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
            'name' => 'required',
            'description' => 'required',
            'id_course' => 'required',
        ]);

        $dataForm = request()->except(['_token','_method']);
        Module::where('id',"=",$id)->update($dataForm);

        return redirect()->route('modules.index')
                    ->with('message','Modulo con id: '.$id.' actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Module::destroy($id);
        return redirect()->route('modules.index')
                ->with('success','Modulo con id: '.$id.' eliminado correctamente.');
    }
}
