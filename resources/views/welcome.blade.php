<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>
        <title>birdboard</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="bg-gray-500">
       <div id="app" class="">
            <router-view></router-view>
       </div>

       {{-- Vue --}}
       <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>