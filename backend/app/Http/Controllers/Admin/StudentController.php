<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $data['dataStudents'] = Student::paginate(5);
        return view('admin.student.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return view('admin.student.create', ['student' => new Student]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $request->validate([
            'nif' => 'required',
            'name' => 'required',
            'last_name1' => 'required',
            'last_name2' => 'required',
            'date_birth' => 'required',
            'mobile_number' => 'required',
            'photo_path' => 'required|image|max:2048',
            'enrolment_status' => 'required',
            'email_personal' => 'required',
            'email_pedralbes' => 'required',
        ]);
        $image = $request->file('photo_path');

        $new_name = rand() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('uploads'), $new_name);

        $dataForm = request()->except('_token');
        Student::create($dataForm);

        return redirect()->route('students.index')
            ->with('success', 'Student created successfully.');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        return view('admin.student.show', ['student' => Student::findOrFail($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        return view('admin.student.edit', ['student' => Student::findOrFail($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $request->validate([
            'nif' => 'required',
            'name' => 'required',
            'last_name1' => 'required',
            'last_name2' => 'required',
            'date_birth' => 'required',
            'mobile_number' => 'required',
            'photo_path' => 'required',
            'enrolment_status' => 'required',
            'email_personal' => 'required',
            'email_pedralbes' => 'required',
        ]);
        $dataForm = request()->except(['_token', '_method']);
        Student::where('id', '=', $id)->update($dataForm);

        return redirect()->route('students.index')
            ->with('success', 'Student updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        Student::destroy($id);
        return redirect()->route('students.index')
            ->with('success', 'Student destroyed successfully.');
    }
}
