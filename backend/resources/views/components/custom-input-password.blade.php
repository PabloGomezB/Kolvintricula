<div id="show_hide_password" class="mt-4">
    <div class="relative">
        <x-label for="password" :value="__('Contraseña')" />
        <x-input id="password" class="block mt-1 w-full"
                        type="password"
                        name="password"
                        required autocomplete="current-password"/>
        <div class="container-eye-form-password">
            <a href="" class="eye-form-password"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
        </div>
    </div>
    @if ($confirmPassword == true)
    <div class="relative mt-4">
        <x-label for="password_confirmation" :value="__('Confirmar contraseña')" />

        <x-input id="password_confirmation" class="block mt-1 w-full"
                        type="password"
                        name="password_confirmation" required />
        <div class="container-eye-form-password">
            <a href="" class="eye-form-password"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
        </div>
    </div>
    @endif
    <div id="pass_validation_message" style="width:100%;text-align:center;color:red;font-weight:bold;visibility:hidden;margin-top:5px;position:absolute;left:0">
        * Las contraseñas no coinciden *
    </div>
</div>
<script>
    $(document).ready(function() {

        let password = document.getElementById("password");
        let password_confirmation = document.getElementById("password_confirmation");

        if(password_confirmation != null){
            // Controla las passwords desde el campo Contraseña
            password.addEventListener("keyup", function(){
                password_confirmation.placeholder = "";
                password_confirmation.disabled = false;
                password_confirmation.style.backgroundColor = 'initial';
                if (password_confirmation.value != this.value){
                    document.getElementById("pass_validation_message").style.visibility='visible';
                }else{
                    document.getElementById("pass_validation_message").style.visibility='hidden';
                }
            });

            // Controla las passwords desde el campo Confirmar contraseña
            password_confirmation.addEventListener("focus", function(){
                if(password.value == ""){
                    password.focus();
                    this.placeholder = "Introduce primero una contraseña..."
                    this.disabled = true;
                    this.style.backgroundColor = '#e4e4e4';
                }
                else{
                    this.addEventListener("keyup", function(){
                        if (password.value != this.value){
                            document.getElementById("pass_validation_message").style.visibility='visible';
                        }else{
                            document.getElementById("pass_validation_message").style.visibility='hidden';
                        }
                    });
                }
            });
        }

        //Hide and show la contraseña y cambia el icono del eye
        $("#show_hide_password a").on('click', function(event) {
            event.preventDefault();
            if($('#show_hide_password input').attr("type") == "text"){
                $('#show_hide_password input').attr('type', 'password');
                $('#show_hide_password i').addClass( "fa-eye-slash" );
                $('#show_hide_password i').removeClass( "fa-eye" );
            }else if($('#show_hide_password input').attr("type") == "password"){
                $('#show_hide_password input').attr('type', 'text');
                $('#show_hide_password i').removeClass( "fa-eye-slash" );
                $('#show_hide_password i').addClass( "fa-eye" );
            }
        });					
    });
</script>