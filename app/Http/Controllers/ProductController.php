<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the packages.
     */
    public function index()
    {
        return Inertia::render('packages', [
            'packages' => Product::all(),
        ]);
    }

    public function getProducts()
    {
        return Product::all();
    }

    /**
     * Store a newly created package in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string', 'max:255'],
            'image' => ['required', 'image', 'max:8192'],
            'tags' => ['required', 'string', 'max:255'],
            'service' => ['required', 'string', 'max:255'],
            'time' => ['required', 'string', 'max:255'],
            'price' => ['required', 'string', 'regex:/^\d{1,3}(\.\d{3})*,\d{2}$/'],
            'link' => ['required', 'url', 'max:255'],
            'is_active' => ['required', 'in:0,1'],
        ]);

        if ($validator->fails()) {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput();
        }

        $data = $validator->validated();

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $path = $request->file('image')->store('products', 'public');
            $data['image'] = Storage::url($path);
        } else {
            Log::warning('Falha ao subir imagem no campo "image".');
            return redirect()
                ->back()
                ->with('error', 'Erro ao enviar a imagem. Verifique e tente novamente.')
                ->withInput();
        }

        // Convertendo tags para array (se necessário)
        if (is_string($data['tags'])) {
            $data['tags'] = array_map('trim', explode(',', $data['tags']));
        }

        Product::create($data);

        return redirect()
            ->route('dashboard.pages.packages.index')
            ->with('success', 'Pacote criado com sucesso!');
    }

    /**
     * Update the specified package in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        return redirect()->route('dashboard.pages.packages.index')
            ->with('success', 'Pacote atualizado com sucesso');
    }

    /**
     * Remove the specified package from storage.
     */
    public function destroy(Product $product)
    {
        try {
            // Remove a imagem do storage antes de deletar o produto
            if ($product->image) {
                $imagePath = str_replace('/storage/', '', $product->image);
                Storage::disk('public')->delete($imagePath);
            }

            $product->delete();
            return redirect()
                ->route('dashboard.pages.packages.index')
                ->with('success', 'Pacote deletado com sucesso!');
        } catch (\Exception $e) {
            Log::error('Erro ao deletar pacote: ' . $e->getMessage());

            return redirect()
                ->back()
                ->with('error', 'Erro ao deletar o pacote. Tente novamente.');
        }
    }
}
