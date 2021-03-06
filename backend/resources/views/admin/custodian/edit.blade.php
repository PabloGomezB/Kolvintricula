<x-app-layout>
    @include('admin.custodian.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-white p-6 border-b border-gray-200">
                    <x-validation-errors />
                    <form class="mt-5" action="{{ route('custodians.update',$custodian->id) }}" method="POST">
                        @csrf
                        {{ method_field('PATCH') }}
                        @include('admin.custodian.form')
                        <div class="mt-10">
                            <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Actualizar responsable</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>