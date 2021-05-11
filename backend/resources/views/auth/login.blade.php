<link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
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

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-validation-errors class="mb-4" :errors="$errors" />

        <form id="form_login_register" method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email Address -->
            <div>
                <x-label class="required" for="email" :value="__('Email')" />

                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <!-- Password -->
            <x-custom-input-password :confirmPassword="false"/>

            <!-- Remember Me -->
            <div class="flex items-center justify-between block mt-10">
                <label for="remember_me" class="inline-flex items-center">
                    <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                    <span class="ml-2 text-sm text-gray-600">{{ __('Recordarme') }}</span>
                </label>
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('register') }}">
                    {{ __('¿No tienes cuenta?') }}
                </a>
            </div>
            
            <div class="flex items-center justify-end mt-5">
                <img id="loading_gif" src="{{ asset('img/loading.gif') }}" alt="logo" class="mr-auto block w-auto fill-current" style="height:30px;visibility:hidden">
                @if (Route::has('password.request'))
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        {{ __('He olvidado mi contraseña') }}
                    </a>
                @endif

                <x-button id="btn_submit_login_register" class="ml-3">
                    {{ __('Log in') }}
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