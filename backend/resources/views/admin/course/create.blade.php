@extends('admin.course.layout')
  
@section('content')

<h2>Crear nuevo curso</h2>

@if ($errors->any())
    <div class="alert alert-danger">
        <strong>Whoops!</strong> There were some problems with your input.<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form class="mt-5" action="{{ route('courses.store') }}" method="POST">
    @csrf
    @include('admin.course.form')
</form>

<a class="btn btn-dark" href="{{ route('courses.index') }}">Volver</a>
@endsection