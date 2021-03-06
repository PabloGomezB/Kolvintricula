<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['dataCourses'] = Course::orderBy('updated_at', 'desc')->paginate(10);
        return view('admin.course.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.course.create', ['course' => new Course]);
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
            'type' => 'required',
            'name' => 'required|unique:courses',
            'description' => 'required',
            'state' => 'required',
        ]);
    
        $dataForm = request()->except('_token');

        Course::create($dataForm);
        return redirect()->route('courses.index')
            ->with('message','El curso '.$request->description.' se ha creado correctamente');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('admin.course.show', ['course' => Course::findOrFail($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('admin.course.edit', ['course' => Course::findOrFail($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Control para poder hacer update manteniendo el requisito UNIQUE
        $courseToUpdate = DB::table('courses')->where('id', $id)->get();
        $newName = request()->only('name');

        // Si el nombre del curso actual es distinto del que quiere introducir se verifica que no exista ya
        // En caso contrario se omite la comprobaci??n porque sino dar?? error ya que se verifica contra su propio nombre y no deja hacer update
        if ($courseToUpdate[0]->name != $newName['name']){
            $request->validate([
                'name' => 'unique:courses',
            ]);
        }

        // Se verifican los campos restantes y se contin??a con la l??gica normal
        $request->validate([
            'type' => 'required',
            'name' => 'required',
            'description' => 'required',
            'state' => 'required',
        ]);

        $dataForm = request()->except(['_token','_method']);
        Course::where('id', '=', $id)->update($dataForm);

        return redirect()->route('courses.index')
            ->with('message','El curso '.$request->description.' se ha actualizado correctamente');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Course::destroy($id);
        return redirect()->route('courses.index')
            ->with('message','El curso con id '.$id.' se ha eliminado correctamente');
    }

}
