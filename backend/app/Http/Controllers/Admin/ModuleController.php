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
        $data['dataModules'] = Module::orderBy('updated_at', 'desc')->paginate(20);
        return view('admin.module.index',$data);
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
        return view('admin.module.create',['module' => new Module,'id'=>$id]);
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
            ->with('message','El modulo '.$request->name.': '.$request->description .' se ha creado correctamente.');
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
            ->with('message','Modulo con id: '.$id.' eliminado correctamente.');
    }
}
