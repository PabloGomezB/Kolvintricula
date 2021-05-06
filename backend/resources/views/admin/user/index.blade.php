@extends('admin.user.layout')
  
@section('content')
    <div class="row" style="margin-top: 5rem;">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Lista Usuarios</h2>
            </div>
            <div class="pull-right">
                {{-- <a class="btn btn-success" href="{{ route('posts.create') }}"> Create New Post</a> --}}
            </div>
        </div>
    </div>
   
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <table class="table table-bordered" style="margin-top: 5rem;">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($data as $key => $value)
        <tr>
            <td>{{ $value->id }}</td>
            <td>{{ $value->name }}</td>
            <td>{{ $value->email }}</td>
            <td>{{ \Str::limit($value->password, 20) }}</td>
            <td>
                <form action="{{ route('users.destroy',$value->id) }}" method="POST">   
                    <a class="btn btn-info" href="{{ route('users.show',$value->id) }}">Show</a>    
                    <a class="btn btn-primary" href="{{ route('users.edit',$value->id) }}">Edit</a>   
                    @csrf
                    @method('DELETE')      
                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>  
    {{-- {!! $data->links() !!}       --}}
@endsection