<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/carrito', 'ShoppingCartController@show')->name('shopping_cart.show');
Route::get('/carrito/productos', 'ShoppingCartController@products')->name('shopping_cart.products');

Route::get('/pagar', 'PaymentsController@pay')->name('payments.pay');
Route::get('/pagar/completar', 'PaymentsController@execute')->name('payments.execute');

Route::resource('productos', 'ProductsController');

Route::resource('in_shopping_carts', 'ProductInShoppingCartsController', [
    'only' => ['store', 'destroy']
]);

Route::get('/home', 'HomeController@index')->name('home');
