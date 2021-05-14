<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Custodian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Echo_;

class CustodianController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $data['dataCustodians'] = Custodian::orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.custodian.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return view('admin.custodian.create', ['custodian' => new Custodian]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $request->validate([
            'id_student' => 'required',
            'responsible' => 'required',
            'nif' => 'required',
            'name' => 'required',
            'last_name1' => 'required',
            'last_name2' => 'required',
            'mobile_number' => 'required',
            'email' => 'required',
        ]);
        $dataForm = request()->except('_token');

        Custodian::create($dataForm);
        return redirect()->route('custodians.index')
            ->with('message', 'El anexo del consentimiento legal ' . $request->description . ' se ha creado correctamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Custodian  $custodian
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        return view('admin.custodian.show', ['custodian' => Custodian::findOrFail($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Custodian  $custodian
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        return view('admin.custodian.edit', ['custodian' => Custodian::findOrFail($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Custodian  $custodian
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        // Control para poder hacer update manteniendo el requisito UNIQUE
        $custodianToUpdate = DB::table('courses')->where('id', $id)->get();
        $newName = request()->only('name');

        // Si el nombre del curso actual es distinto del que quiere introducir se verifica que no exista ya
        // En caso contrario se omite la comprobación porque sino dará error ya que se verifica contra su propio nombre y no deja hacer update
        if ($custodianToUpdate[0]->name != $newName['name']) {
            $request->validate([
                'name' => 'unique:custodians',
            ]);
        }

        // Se verifican los campos restantes y se continúa con la lógica normal
        $request->validate([
            'id_student' => 'required',
            'responsible' => 'required',
            'nif' => 'required',
            'name' => 'required',
            'last_name1' => 'required',
            'last_name2' => 'required',
            'mobile_number' => 'required',
            'email' => 'required',
        ]);


        $dataForm = request()->except(['_token', '_method']);
        Custodian::where('id', '=', $id)->update($dataForm);

        return redirect()->route('custodian.index')
            ->with('message', 'La autorización  ' . $request->description . ' se ha actualizado correctamente');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        Custodian::destroy($id);
        return redirect()->route('custodian.index')
            ->with('message', 'La autorización con id ' . $id . ' se ha eliminado correctamente');
    }
}
