<script setup lang="ts"></script>
<template>
    <main class="flex items-center justify-center min-h-screen">
        <div class="flex flex-col text-center w-[38rem] gap-y-5">
            <div class="flex flex-col gap-y-4">
                <h1 class="text-5xl font-bold">Vamos começar</h1>
                <p class="text-[1rem]">Faça login em sua conta para continuar usando nossa experiência do cliente.</p>
            </div>
            <div>
                <form @submit.prevent class="flex flex-col gap-y-3">
                    <div class="flex text-[1rem] md:flex-row flex-col text-start justify-between">
                        <div class="flex flex-col">
                            <label for="firstName">Primeiro nome</label>
                            <input type="text" id="firstName" name="firstName"
                                class="h-10 px-3 bg-gray-200 md:w-[18.43rem] rounded-lg" placeholder="Primeiro nome">
                        </div>
                        <div class="flex flex-col">
                            <label for="lastName">Sobrenome</label>
                            <input type="text" id="lastName" name="lastName"
                                class="h-10 px-3 bg-gray-200 md:w-[18.43rem] rounded-lg" placeholder="Sobrenome">
                        </div>


                    </div>
                    <div class="flex flex-col text-start gap-y-3">
                        <div class="flex flex-col">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="h-10 px-3 bg-gray-200 rounded-lg"
                                placeholder="admin@company.com">
                        </div>
                        <div class="flex flex-col">
                            <label for="password">Senha</label>
                            <input type="password" id="password" name="password" class="h-10 px-3 bg-gray-200 rounded-lg"
                                placeholder="Digite sua senha">
                        </div>
                        <div class="flex flex-col">
                            <label for="confirmPassword">Confirmação de senha</label>
                            <input type="password" id="confirmPassword" name="password"
                                class="h-10 px-3 bg-gray-200 rounded-lg" placeholder="Confirmar senha">
                        </div>
                    </div>
                    <div class="w-full mb-24">
                        <div class="flex gap-10 justify-between gap-y-5 flex-col">
                            <div class="flex justify-between">
                                <div>
                                    <input type="checkbox" name="rememberMe" id="rememberMe">
                                    <label for="remember">Lembrar de mim</label>
                                </div>
                                <a href="forgotPassword" class="text-blue-500">Esqueceu a senha?</a>
                            </div>
                            <button class="w-full h-10 text-center bg-blue-500 text-white rounded-lg">Registrar-se</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </main>
</template>