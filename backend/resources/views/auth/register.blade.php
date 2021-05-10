<link rel="stylesheet" href="{{ asset('css/custom.css') }}">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <img src="{{ asset('img/logo2.png') }}" alt="logo" class="block w-auto fill-current" style="height:100px">
            </a>
        </x-slot>

        <!-- Validation Errors -->
        <x-validation-errors class="mb-4" :errors="$errors" />

        <form id="form_login_register" method="POST" action="{{ route('register') }}">
            @csrf

            <!-- Name -->
            <div>
                <x-label class="required" for="name" :value="__('Nombre')" />

                <x-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus />
            </div>

            <!-- Email Address -->
            <div class="mt-4">
                <x-label class="required" for="email" :value="__('Email')" />

                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required />
            </div>

            <!-- Password -->
            <x-custom-input-password :confirmPassword="true"/>

            <div class="flex items-center justify-end mt-10">
                <img id="loading_gif" src="{{ asset('img/loading.gif') }}" alt="logo" class="mr-auto block w-auto fill-current" style="height:30px;visibility:hidden">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                    {{ __('¿Ya tienes una cuenta?') }}
                </a>

                <x-button id="btn_submit_login_register" class="ml-4">
                    {{ __('Registrarse') }}
                </x-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
<script>
    $(document).ready(function() {
        document.getElementById("btn_submit_login_register").addEventListener("click", function(){
            let form = document.getElementById("form_login_register");
            if (form.checkValidity()){
                document.getElementById("loading_gif").style.visibility='visible';
            }
        });
    });
</script>
