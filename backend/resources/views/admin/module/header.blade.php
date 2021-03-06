<x-slot name="header">
    <div class="flex justify-between ">
        <div class="flex">
            <a class="set-border-bottom-hover" href="{{ route('modules.index') }}">
                <h2 class="font-semibold text-2xl text-gray-800 leading-tight relative">
                    {{ __('Modulos') }}
                    {{-- <span class="content-head-separator"></span>
                    <span class="arrow-left"></span> --}}
                </h2>
            </a>
            <div class="ml-20 pt-0.5">
                <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  
                    href="{{ route('modules.create') }}">
                    Añadir nuevo modulo
                </a>
            </div>
            @if(Route::is('modules.show'))
                <div class="ml-20 pt-0.5">
                    <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  
                        href="{{ route('ufs.create', ['id' => $module->id]) }}">
                        Añadir nueva UF
                    </a>
                </div>
            @endif
                
        </div>
</x-slot>