<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable();
            $table->string('page_title')->nullable();
            $table->string('page_description', 160)->nullable();

            // Banner
            $table->string('banner_title')->nullable();
            $table->text('banner_description')->nullable();
            $table->string('banner_image')->nullable();
            $table->string('banner_image_button_text')->nullable();
            $table->string('banner_image_button_link')->nullable();
            $table->string('banner_button_text')->nullable();
            $table->string('banner_button_link')->nullable();
            $table->string('banner_image_title')->nullable();
            $table->text('banner_image_description')->nullable();
            $table->integer('banner_section_details_1_title')->nullable();
            $table->text('banner_section_details_1_description')->nullable();
            $table->integer('banner_section_details_2_title')->nullable();
            $table->text('banner_section_details_2_description')->nullable();
            $table->integer('banner_section_details_3_title')->nullable();
            $table->text('banner_section_details_3_description')->nullable();
            $table->string('banner_video_title')->nullable();
            $table->string('banner_video_image')->nullable();
            $table->string('banner_video_url')->nullable();

            // CTA
            $table->string('cta_text_1')->nullable();
            $table->string('cta_text_2')->nullable();

            // WhoWorks
            $table->string('who_works_section_intro_highlight')->nullable();
            $table->string('who_works_intro_title')->nullable();
            $table->text('who_works_intro_description')->nullable();
            $table->string('who_works_title')->nullable();
            $table->text('who_works_description')->nullable();
            $table->string('who_works_image')->nullable();
            $table->json('who_works_details')->nullable();

            // Destinations
            $table->string('destinations_section_intro_highlight')->nullable();
            $table->string('destinations_title')->nullable();
            $table->text('destinations_description')->nullable();
            $table->string('destinations_button_text')->nullable();
            $table->string('destinations_button_link')->nullable();
            $table->json('destinations_details')->nullable();

            // Packages
            $table->string('packages_section_intro_highlight')->nullable();
            $table->string('packages_title')->nullable();

            // Footer
            $table->string('footer_title')->nullable();
            $table->text('footer_description')->nullable();
            $table->string('footer_button_text')->nullable();
            $table->string('footer_button_link')->nullable();
            $table->json('footer_details')->nullable();

            $table->timestamps();
        });

        DB::table('homes')->insert([
            'slug' => 'home',
            'page_title' => 'Tirar Visto com Segurança e Facilidade',
            'page_description' => 'Consultoria completa para tirar seu visto sem dor de cabeça.',

            'banner_title' => 'Tire seu Visto conosco e não tenha nenhuma surpresa negativa!',
            'banner_description' => 'Com um suporte altamente treinado, nós tornamos seu processo de visto mais tranquilo e sem estresse.',
            'banner_image' => null,
            'banner_button_text' => 'Saiba mais',
            'banner_button_link' => '#',
            'banner_image_button_text' => 'Tirar meu visto agora!',
            'banner_image_button_link' => '#',
            'banner_image_title' => 'Realize o seu sonho com a ajuda da Tirar Visto!',
            'banner_image_description' => 'Com um serviço profissional, você não terá dor de cabeça para todo o processo de solicitação e entrevistas no consulado.',
            'banner_section_details_1_title' => 509,
            'banner_section_details_1_description' => 'Vistos Tirados',
            'banner_section_details_2_title' => 602,
            'banner_section_details_2_description' => 'Processos Finalizados',
            'banner_section_details_3_title' => 634,
            'banner_section_details_3_description' => 'Famílias Felizes',

            'cta_text_1' => 'CONSULTORIA COMPLETA PARA TIRAR SEU VISTO 😎',
            'cta_text_2' => 'VOCÊ ESTÁ EM BOAS MÃOS! 🤩',

            'who_works_section_intro_highlight' => 'Viaje com Assistência',
            'who_works_intro_title' => 'SUA TRANQUILIDADE NÃO TEM PREÇO!',
            'who_works_intro_description' => 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
            'who_works_title' => 'Etapa Inicial',
            'who_works_description' => 'Entrega de Documentos e muito mais etapas para garantir sucesso no seu visto.',
            'who_works_image' => null,
            'who_works_details' => null,

            'destinations_section_intro_highlight' => 'Top Destinos',
            'destinations_title' => 'Destinos mais procurados',
            'destinations_description' => 'Confira os destinos mais procurados por nossos clientes nos últimos meses.',
            'destinations_button_text' => 'Conheça mais',
            'destinations_button_link' => '#',
            'destinations_details' => null,

            'packages_section_intro_highlight' => 'Pacotes',
            'packages_title' => 'Confira nossos pacotes',

            'footer_title' => 'Está com alguma dúvida?',
            'footer_description' => 'Entre em contato através do nosso canal direto ou clique no botão abaixo.',
            'footer_button_text' => 'Fale conosco',
            'footer_button_link' => '#',
            'footer_details' => null,

            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('homes');
    }
};