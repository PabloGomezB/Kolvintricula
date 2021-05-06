@extends('layouts.admin')
  
@section('content')

    <h2 style="margin-top: 2rem;">Lista Cursos</h2>
    <a style="margin-top: 2rem;" class="btn btn-success" href="{{ route('courses.create') }}">Añadir nuevo curso</a>
   
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <table class="table table-bordered" style="margin-top: 5rem;">
        <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($dataCourses as $course)
        <tr>
            <td>{{ $course->id }}</td>
            <td>{{ $course->type }}</td>
            <td>{{ $course->name }}</td>
            <td>{{ $course->description }}</td>
            <td>{{ $course->state }}</td>
            <td>
                <form action="{{ route('courses.destroy',$course->id) }}" method="POST">   
                    <a class="btn btn-info" href="{{ route('courses.show',$course->id) }}">Ver</a>    
                    <a class="btn btn-primary" href="{{ route('courses.edit',$course->id) }}">Editar</a>   
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Eliminar</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>  
    {!! $dataCourses->links() !!}
@endsection