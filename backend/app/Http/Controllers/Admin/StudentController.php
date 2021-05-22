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
        $data['dataStudents'] = Student::orderBy('updated_at', 'desc')->paginate(10);
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
            'mobile_number' => 'required|min:9',
            'photo_path' => 'required|image|max:4096',
            'enrolment_status' => 'required',
            'email_personal' => 'required|email',
            'email_pedralbes' => 'required|email',
        ]);

        $image = $request->file('photo_path');
        $new_name = rand() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('uploads'), $new_name);
        $dataForm = array(
            'nif' => $request->nif,
            'name' => $request->name,
            'last_name1' => $request->last_name1,
            'last_name2' => $request->last_name2,
            'date_birth' => $request->date_birth,
            'mobile_number' => $request->mobile_number,
            'photo_path' => $new_name,
            'enrolment_status' => $request->enrolment_status,
            'email_personal' => $request->email_personal,
            'email_pedralbes' => $request->email_pedralbes,
        );
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
            'mobile_number' => 'required|min:9',
            'photo_path' => 'required|image|max:4096',
            'enrolment_status' => 'required',
            'email_personal' => 'required|email',
            'email_pedralbes' => 'required|email',
        ]);

        $image = $request->file('photo_path');
        $new_name = rand() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('uploads'), $new_name);
        $dataForm = array(
            'nif' => $request->nif,
            'name' => $request->name,
            'last_name1' => $request->last_name1,
            'last_name2' => $request->last_name2,
            'date_birth' => $request->date_birth,
            'mobile_number' => $request->mobile_number,
            'photo_path' => $new_name,
            'enrolment_status' => $request->enrolment_status,
            'email_personal' => $request->email_personal,
            'email_pedralbes' => $request->email_pedralbes,
        );

        // Student::create($dataForm);


        // $dataForm = request()->except(['_token', '_method']);
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
