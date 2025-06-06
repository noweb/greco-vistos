<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('home', [
            'home' => Home::first() ?? new Home(),
        ]);
    }

    public function update(Request $request)
    {
        try {
            $destinations_details = Home::first()->destinations_details;

            $home = Home::updateOrCreate(['id' => 1], $request->except(['banner_image', 'banner_video_image', 'who_works_image', 'destinations_details']));

            if ($request->hasFile('banner_image')) {
                $home->banner_image = $request->file('banner_image')->store('banners', 'public');
            }

            if ($request->hasFile('banner_video_image')) {
                $home->banner_video_image = $request->file('banner_video_image')->store('banners', 'public');
            }

            if ($request->hasFile('who_works_image')) {
                $home->who_works_image = $request->file('who_works_image')->store('banners', 'public');
            }

            if ($request->has('destinations_details')) {
                $destinationsDetails = $request['destinations_details'];

                foreach ($destinationsDetails as $index => $detail) {
                    if (isset($detail['image']) && $detail['image'] instanceof \Illuminate\Http\UploadedFile) {
                        $destinationsDetails[$index]['image'] = $detail['image']->store('destinations', 'public');
                    } else {
                        $destinationsDetails[$index]['image'] = $destinations_details[$index]['image'] ?? null;
                    }
                }

                $home->destinations_details = $destinationsDetails;
            }

            $home->save();

            return redirect()
                ->route('dashboard')
                ->with('success', 'Página atualizada com sucesso!');
        } catch (\Exception $e) {
            Log::error('Erro ao atualizar Home: ' . $e->getMessage());
            dd($e);
            return redirect()
                ->back()
                ->with('error', 'Erro ao atualizar a página. Por favor, tente novamente.');
        }
    }

    public function show()
    {
        return Home::first();
    }
}
