<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['dataCourses'] = Course::paginate(2);
        return view('admin.course.index', $data);

        // $dataCourses = Course::all();
        // return view('admin.course.index', compact('dataCourses'));
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
            'name' => 'required',
            'description' => 'required',
            'state' => 'required',
        ]);
    
        $dataForm = request()->except('_token');
        Course::create($dataForm);
     
        return redirect()->route('courses.index')
            ->with('success','Course created successfully.');


        // Segunda forma de introducirlo (no testeado)
        // Course::insert($dataForm);

        // Ver datos en pantalla
        // $dataForm = request()->all();
        // return response()->json($dataForm);
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
        $request->validate([
            'type' => 'required',
            'name' => 'required',
            'description' => 'required',
            'state' => 'required',
        ]);
    
        $dataForm = request()->except(['_token','_method']);
        Course::where('id', '=', $id)->update($dataForm);

        return redirect()->route('courses.index')
                ->with('success','Course updated successfully.');
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
                ->with('success','Course destroyed successfully.');
    }
}
