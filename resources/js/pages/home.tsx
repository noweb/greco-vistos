import { ContentBlock } from '@/components/content-block';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head, router, usePage } from '@inertiajs/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

export interface Home {
    id: number;
    slug: string | null;
    page_title: string;
    page_description: string;
    banner_title: string;
    banner_description: string;
    banner_image: File;
    banner_image_button_text: string | null;
    banner_image_button_link: string | null;
    banner_button_text: string | null;
    banner_button_link: string | null;
    banner_image_title: string;
    banner_image_description: string;
    banner_section_details_1_title: string | null;
    banner_section_details_1_description: string | null;
    banner_section_details_2_title: string | null;
    banner_section_details_2_description: string | null;
    banner_section_details_3_title: string | null;
    banner_section_details_3_description: string | null;
    banner_video_title: string;
    banner_video_image: File;
    banner_video_url: string | null;
    cta_text_1: string | null;
    cta_text_2: string | null;
    who_works_section_intro_highlight: string | null;
    who_works_intro_title: string | null;
    who_works_intro_description: string | null;
    who_works_title: string | null;
    who_works_description: string | null;
    who_works_image: string;
    who_works_details: Array<{
        title: string;
        description: string;
    }>;
    destinations_section_intro_highlight: string | null;
    destinations_title: string | null;
    destinations_description: string | null;
    destinations_button_text: string | null;
    destinations_button_link: string | null;
    destinations_details: Array<{
        title: string;
        image: File;
    }>;
    packages_section_intro_highlight: string | null;
    packages_title: string | null;
    footer_title: string | null;
    footer_description: string | null;
    footer_button_text: string | null;
    footer_button_link: string | null;
    created_at: string;
    updated_at: string;
}

const formSchema = z.object({
    //  SEO
    slug: z.string().nullable(),
    page_title: z.string().min(0, {
        message: 'O título da página deve ter pelo menos 2 caracteres.',
    }),
    page_description: z
        .string()
        .min(0, {
            message: 'A descrição da página deve ter pelo menos 2 caracteres.',
        })
        .max(160, {
            message: 'A descrição da página deve ter no máximo 160 caracteres.',
        }),

    //  Conteúdo Banner
    banner_title: z.string().min(0, {
        message: 'O título do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_description: z.string().min(0, {
        message: 'A descrição do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_image: z.instanceof(File, {
        message: 'A imagem do banner deve ser um arquivo.',
    }),
    banner_image_button_text: z.string().min(0, {
        message: 'O texto do botão da imagem do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_image_button_link: z.string().min(0, {
        message: 'O link do botão da imagem do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_button_text: z.string().min(0, {
        message: 'O texto do botão do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_button_link: z.string().min(0, {
        message: 'O link do botão do banner deve ter pelo menos 2 caracteres.',
    }),

    banner_image_title: z.string().min(0, {
        message: 'O título da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_image_description: z.string(),

    banner_section_details_1_title: z
        .string({
            required_error: 'O título da seção de detalhes 1 é obrigatório.',
        })
        .min(1, {
            message: 'O título da seção de detalhes 1 deve ser um número maior que 0.',
        }),
    banner_section_details_1_description: z.string().min(0, {
        message: 'A descrição da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_section_details_2_title: z
        .string({
            required_error: 'O título da seção de detalhes 2 é obrigatório.',
        })
        .min(1, {
            message: 'O título da seção de detalhes 2 deve ser um número maior que 0.',
        }),
    banner_section_details_2_description: z.string().min(0, {
        message: 'O título da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_section_details_3_title: z
        .string({
            required_error: 'O título da seção de detalhes 3 é obrigatório.',
        })
        .min(1, {
            message: 'O título da seção de detalhes 3 deve ser um número maior que 0.',
        }),
    banner_section_details_3_description: z.string().min(0, {
        message: 'A descrição da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_video_title: z.string().min(0, {
        message: 'O título do vídeo do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_video_image: z.instanceof(File, {
        message: 'A imagem do vídeo do banner deve ser um arquivo.',
    }),
    banner_video_url: z.string().min(0, {
        message: 'A URL do vídeo do banner deve ter pelo menos 2 caracteres.',
    }),

    // CTA
    cta_text_1: z.string().min(0, {
        message: 'O texto 1 do CTA deve ter pelo menos 2 caracteres.',
    }),
    cta_text_2: z.string().min(0, {
        message: 'O texto 2 do CTA deve ter pelo menos 2 caracteres.',
    }),

    // WhoWorks
    who_works_section_intro_highlight: z.string().min(0, {
        message: 'O destaque da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_intro_title: z.string().min(0, {
        message: 'O título da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_intro_description: z.string().min(0, {
        message: 'A descrição da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_title: z.string().min(0, {
        message: 'O título da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_description: z.string().min(0, {
        message: 'A descrição da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_image: z.instanceof(File, {
        message: 'A imagem da seção de como funciona deve ser um arquivo.',
    }),
    who_works_details: z
        .array(
            z.object({
                title: z.string().min(0, {
                    message: 'O título da seção de como funciona deve ter pelo menos 2 caracteres.',
                }),
                description: z.string().min(0, {
                    message: 'A descrição da seção de como funciona deve ter pelo menos 2 caracteres.',
                }),
            }),
        )
        .min(1, {
            message: 'A seção de como funciona deve ter pelo menos 1 item.',
        }),

    // Destinations
    destinations_section_intro_highlight: z.string().min(0, {
        message: 'O destaque da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_title: z.string().min(0, {
        message: 'O título da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_description: z.string().min(0, {
        message: 'A descrição da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_button_text: z.string().min(0, {
        message: 'O texto do botão da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_button_link: z.string().min(0, {
        message: 'O link do botão da seção de destinos deve ter pelo menos 2 caracteres.',
    }),

    destinations_details: z
        .array(
            z.object({
                title: z.string().min(0, {
                    message: 'O título da seção de destinos deve ter pelo menos 2 caracteres.',
                }),
                image: z.instanceof(File, {
                    message: 'A imagem da seção de destinos deve ser um arquivo.',
                }),
            }),
        )
        .min(1, {
            message: 'A seção de destinos deve ter pelo menos 1 item.',
        }),

    // Packages
    packages_section_intro_highlight: z.string().min(0, {
        message: 'O destaque da seção de pacotes deve ter pelo menos 2 caracteres.',
    }),
    packages_title: z.string().min(0, {
        message: 'O título da seção de pacotes deve ter pelo menos 2 caracteres.',
    }),
    packages_details: z.array(
        z.object({
            title: z.string(),
            image: z.instanceof(File).optional(),
            tags: z.array(z.string()),
            service: z.string(),
            time: z.string(),
            price: z.number(),
            link: z.string(),
        }),
    ),

    // Footer
    footer_title: z.string().min(0, {
        message: 'O título da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_description: z.string().min(0, {
        message: 'A descrição da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_button_text: z.string().min(0, {
        message: 'O texto do botão da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_button_link: z.string().min(0, {
        message: 'O link do botão da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_details: z.array(
        z.object({
            title: z.string().min(0, {
                message: 'O título da seção de rodapé deve ter pelo menos 2 caracteres.',
            }),
            link: z.string().min(0, {
                message: 'O link da seção de rodapé deve ter pelo menos 2 caracteres.',
            }),
        }),
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
    const { home } = usePage<{ home: Home }>().props;

    console.log(home);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            slug: home.slug ?? '',
            page_title: home.page_title ?? '',
            page_description: home.page_description ?? '',
            banner_title: home.banner_title ?? '',
            banner_description: home.banner_description ?? '',
            banner_image_button_text: home.banner_image_button_text ?? '',
            banner_image_button_link: home.banner_image_button_link ?? '',
            banner_button_text: home.banner_button_text ?? '',
            banner_button_link: home.banner_button_link ?? '',
            banner_image_title: home.banner_image_title ?? '',
            banner_image_description: home.banner_image_description ?? '',
            banner_section_details_1_title: home.banner_section_details_1_title ?? '',
            banner_section_details_1_description: home.banner_section_details_1_description ?? '',
            banner_section_details_2_title: home.banner_section_details_2_title ?? '',
            banner_section_details_2_description: home.banner_section_details_2_description ?? '',
            banner_section_details_3_title: home.banner_section_details_3_title ?? '',
            banner_section_details_3_description: home.banner_section_details_3_description ?? '',
            banner_video_title: home.banner_video_title ?? '',
            banner_video_url: home.banner_video_url ?? '',
            cta_text_1: home.cta_text_1 ?? '',
            cta_text_2: home.cta_text_2 ?? '',
            who_works_section_intro_highlight: home.who_works_section_intro_highlight ?? '',
            who_works_intro_title: home.who_works_intro_title ?? '',
            who_works_intro_description: home.who_works_intro_description ?? '',
            who_works_title: home.who_works_title ?? '',
            who_works_description: home.who_works_description ?? '',
            who_works_details: JSON.parse(home.who_works_details as unknown as string) ?? [
                {
                    title: '',
                    description: '',
                },
            ],
            destinations_section_intro_highlight: home.destinations_section_intro_highlight ?? '',
            destinations_title: home.destinations_title ?? '',
            destinations_description: home.destinations_description ?? '',
            destinations_button_text: home.destinations_button_text ?? '',
            destinations_button_link: home.destinations_button_link ?? '',
            destinations_details: home.destinations_details ?? [
                {
                    title: '',
                },
                {
                    title: '',
                },
                {
                    title: '',
                },
                {
                    title: '',
                },
                {
                    title: '',
                },
                {
                    title: '',
                },
            ],
            packages_section_intro_highlight: home.packages_section_intro_highlight ?? '',
            packages_title: home.packages_title ?? '',
            footer_title: home.footer_title ?? '',
            footer_description: home.footer_description ?? '',
            footer_button_text: home.footer_button_text ?? '',
            footer_button_link: home.footer_button_link ?? '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        try {
            const formData = new FormData();

            formData.append('_method', 'PUT');
            formData.append('slug', values.slug ?? '');
            formData.append('page_title', values.page_title);
            formData.append('page_description', values.page_description);
            formData.append('banner_title', values.banner_title);
            formData.append('banner_description', values.banner_description);

            // Handle banner image
            if (values.banner_image && values.banner_image instanceof File) {
                formData.append('banner_image', values.banner_image);
            }

            formData.append('banner_image_button_text', values.banner_image_button_text);
            formData.append('banner_image_button_link', values.banner_image_button_link);
            formData.append('banner_button_text', values.banner_button_text);
            formData.append('banner_button_link', values.banner_button_link);
            formData.append('banner_image_title', values.banner_image_title);
            formData.append('banner_image_description', values.banner_image_description);
            formData.append('banner_section_details_1_title', values.banner_section_details_1_title);
            formData.append('banner_section_details_1_description', values.banner_section_details_1_description);
            formData.append('banner_section_details_2_title', values.banner_section_details_2_title);
            formData.append('banner_section_details_2_description', values.banner_section_details_2_description);
            formData.append('banner_section_details_3_title', values.banner_section_details_3_title);
            formData.append('banner_section_details_3_description', values.banner_section_details_3_description);
            formData.append('banner_video_title', values.banner_video_title);

            // Handle banner video image
            if (values.banner_video_image && values.banner_video_image instanceof File) {
                formData.append('banner_video_image', values.banner_video_image);
            }

            formData.append('banner_video_url', values.banner_video_url);
            formData.append('cta_text_1', values.cta_text_1);
            formData.append('cta_text_2', values.cta_text_2);
            formData.append('who_works_section_intro_highlight', values.who_works_section_intro_highlight);
            formData.append('who_works_intro_title', values.who_works_intro_title);
            formData.append('who_works_intro_description', values.who_works_intro_description);
            formData.append('who_works_title', values.who_works_title);
            formData.append('who_works_description', values.who_works_description);

            // Handle who works image
            if (values.who_works_image && values.who_works_image instanceof File) {
                formData.append('who_works_image', values.who_works_image);
            }

            formData.append('who_works_details', JSON.stringify(values.who_works_details));
            formData.append('destinations_section_intro_highlight', values.destinations_section_intro_highlight);
            formData.append('destinations_title', values.destinations_title);
            formData.append('destinations_description', values.destinations_description);
            formData.append('destinations_button_text', values.destinations_button_text);
            formData.append('destinations_button_link', values.destinations_button_link);

            values.destinations_details.forEach((detail, index) => {
                formData.append(`destinations_details[${index}][title]`, detail.title ?? '');

                if (detail.image instanceof File) {
                    formData.append(`destinations_details[${index}][image]`, detail.image);
                }
            });

            formData.append('packages_section_intro_highlight', values.packages_section_intro_highlight);
            formData.append('packages_title', values.packages_title);

            router.post(route('dashboard.pages.home.update'), formData, {
                forceFormData: true,
                headers: {
                    'X-Inertia': 'true',
                },
                onSuccess: () => {
                    toast.success('Página atualizada com sucesso!');
                    form.reset();
                },
                onError: (errors) => {
                    console.error('Erros de validação:', errors);
                    toast.error('Erro ao atualizar a página.');
                },
            });
        } catch (error) {
            console.error(error);
            toast.error('Erro ao atualizar a página.');
        }
    };

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="px-6 py-6">
                <Form {...form}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit(form.getValues());
                        }}
                        className="space-y-8"
                        encType="multipart/form-data"
                    >
                        <ContentBlock
                            section_title="SEO"
                            section_description="Esta seção é responsável pela edição do SEO da página inicial, incluindo título, descrição e URL."
                        >
                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <div className="col-span-full">
                                        <FormLabel>URL</FormLabel>
                                        <div className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-visible:ring-[3px]">
                                            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">grecovistos.com.br/</div>
                                            <input
                                                type="text"
                                                placeholder="slug"
                                                value={field.value ?? ''}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                ref={field.ref}
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="page_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título da página</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Título da página" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o título da página que será exibido no navegador.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="page_description"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Descrição da página</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Descrição da página" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é a descrição da página que será exibida no navegador.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </ContentBlock>

                        <hr className="my-8" />

                        <ContentBlock
                            section_title="Banner"
                            section_description="Esta seção é responsável pela edição do conteúdo da seção banner da página inicial, incluindo título, descrição e botões."
                            section_image={'/dashboard/banner_img.png'}
                        >
                            <FormField
                                control={form.control}
                                name="banner_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título do banner</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o título do banner que será exibido no navegador.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="banner_description"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Descrição do banner</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é a descrição do banner que será exibida no navegador.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="col-span-full flex flex-row gap-4">
                                <FormField
                                    control={form.control}
                                    name="banner_button_text"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Texto do botão</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Saiba mais" {...field} />
                                            </FormControl>
                                            <FormDescription>Este é a descrição do banner que será exibida no navegador.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="banner_button_link"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Link do botão</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://exemplo.com" {...field} />
                                            </FormControl>
                                            <FormDescription>Este é a descrição do banner que será exibida no navegador.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="banner_image"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Imagem do banner</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
                                        </FormControl>
                                        <FormDescription>Esta é a imagem do vídeo do banner.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="banner_image_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título da seção de detalhes do banner</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o título da seção de detalhes do banner.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="banner_image_description"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Descrição da seção de detalhes do banner</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." {...field} />
                                        </FormControl>
                                        <FormDescription>Esta é a descrição da seção de detalhes do banner.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="col-span-full flex flex-row gap-4">
                                <FormField
                                    control={form.control}
                                    name="banner_image_button_text"
                                    render={({ field }) => (
                                        <FormItem className="col-span-full w-full">
                                            <FormLabel>Texto do botão</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tirar meu visto agora!" {...field} />
                                            </FormControl>
                                            <FormDescription>Este é o texto do botão em cima da imagem do banner.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="banner_image_button_link"
                                    render={({ field }) => (
                                        <FormItem className="col-span-full w-full">
                                            <FormLabel>Link do botão</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tirar meu visto agora!" {...field} />
                                            </FormControl>
                                            <FormDescription>Este é o link do botão em cima da imagem do banner.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-full grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="flex flex-col gap-6">
                                    <FormField
                                        control={form.control}
                                        name="banner_section_details_1_title"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel>Título da seção de detalhes 1</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="503" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="banner_section_details_1_description"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel>Descrição da seção de detalhes 1</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Lorem ipsum." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col gap-6">
                                    <FormField
                                        control={form.control}
                                        name="banner_section_details_2_title"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel>Título da seção de detalhes 2</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="300" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="banner_section_details_2_description"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel>Descrição da seção de detalhes 2</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Lorem ipsum." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col gap-6">
                                    <FormField
                                        control={form.control}
                                        name="banner_section_details_3_title"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel>Título da seção de detalhes 3</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="100" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="banner_section_details_3_description"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel>Descrição da seção de detalhes 3</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="banner_video_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título do vídeo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o título do vídeo do banner.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="banner_video_image"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Imagem do vídeo</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
                                        </FormControl>
                                        <FormDescription>Esta é a imagem do vídeo do banner.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="banner_video_url"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>URL do vídeo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://exemplo.com/video" {...field} />
                                        </FormControl>
                                        <FormDescription>Esta é a URL do vídeo do banner.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </ContentBlock>

                        <hr className="my-8" />

                        <ContentBlock
                            section_title="CTA"
                            section_description="Esta seção é responsável pela edição do conteúdo da seção CTA da página inicial, incluindo título, descrição e botões."
                            section_image={'/dashboard/cta.png'}
                        >
                            <FormField
                                control={form.control}
                                name="cta_text_1"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Texto 1 do CTA</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o primeiro texto do CTA.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="cta_text_2"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Texto 2 do CTA</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o segundo texto do CTA.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </ContentBlock>

                        <hr className="mt-8" />

                        <ContentBlock
                            section_title="Como Funciona"
                            section_description="Esta seção é responsável pela edição do conteúdo da seção Como Funciona da página inicial, incluindo título, descrição e detalhes."
                            section_image={'/dashboard/whoWorks.png'}
                        >
                            <FormField
                                control={form.control}
                                name="who_works_section_intro_highlight"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Destaque da seção</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o destaque da seção Como Funciona.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="who_works_intro_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título da introdução</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o título da introdução da seção Como Funciona.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="who_works_intro_description"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Descrição da introdução</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Esta é a descrição da introdução da seção Como Funciona.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="col-span-full">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-lg font-medium">Detalhes da seção</h3>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            const currentDetails = form.getValues('who_works_details') || [];
                                            form.setValue('who_works_details', [...currentDetails, { title: '', description: '' }]);
                                        }}
                                    >
                                        Adicionar detalhe
                                    </Button>
                                </div>

                                {(form.watch('who_works_details') || [])?.map((_, index) => (
                                    <div key={index} className="mb-6 rounded-lg border p-4">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="font-medium">Detalhe {index + 1}</h4>
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => {
                                                    const currentDetails = form.getValues('who_works_details');
                                                    form.setValue(
                                                        'who_works_details',
                                                        currentDetails.filter((_, i) => i !== index),
                                                    );
                                                }}
                                            >
                                                Remover
                                            </Button>
                                        </div>

                                        <div className="grid gap-4">
                                            <FormField
                                                control={form.control}
                                                name={`who_works_details.${index}.title`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Título</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Título do detalhe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`who_works_details.${index}.description`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Descrição</FormLabel>
                                                        <FormControl>
                                                            <Textarea placeholder="Descrição do detalhe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <FormField
                                control={form.control}
                                name="who_works_image"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Imagem da seção</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
                                        </FormControl>
                                        <FormDescription>Esta é a imagem da seção Como Funciona.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </ContentBlock>

                        <hr className="my-8" />

                        <ContentBlock
                            section_title="Destinos"
                            section_description="Esta seção é responsável pela edição do conteúdo da seção Destinos da página inicial, incluindo título, descrição e detalhes."
                            section_image={'/dashboard/destinations.png'}
                        >
                            <FormField
                                control={form.control}
                                name="destinations_section_intro_highlight"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Destaque da seção</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Destaque da seção" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinations_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Título da seção" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinations_description"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Descrição</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Descrição da seção" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinations_button_text"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Texto do botão</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Texto do botão" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinations_button_link"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Link do botão</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Link do botão" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="col-span-full">
                                <FormField
                                    control={form.control}
                                    name="destinations_details"
                                    render={({ field }) => (
                                        <FormItem className="col-span-full">
                                            <FormLabel>Detalhes dos destinos</FormLabel>
                                            <FormControl>
                                                <div className="grid grid-cols-1 space-y-2 gap-x-2 md:grid-cols-3">
                                                    {field.value.map((_: { title: string; image: File }, index: number) => (
                                                        <div key={index} className="grid gap-4 rounded-lg border p-4">
                                                            <FormField
                                                                control={form.control}
                                                                name={`destinations_details.${index}.title`}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Título</FormLabel>
                                                                        <FormControl>
                                                                            <Input placeholder="Título do destino" {...field} />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name={`destinations_details.${index}.image`}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Imagem</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                type="file"
                                                                                accept="image/*"
                                                                                onChange={(e) => field.onChange(e.target.files?.[0])}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </ContentBlock>

                        <hr className="my-8" />

                        <ContentBlock
                            section_title="Pacotes"
                            section_description="Esta seção é responsável pela edição do conteúdo da seção Pacotes da página inicial, incluindo título, descrição e detalhes."
                            section_image={'/dashboard/packages.png'}
                        >
                            <FormField
                                control={form.control}
                                name="packages_section_intro_highlight"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Destaque da seção</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Destaque da seção" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="packages_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Título da seção" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </ContentBlock>

                        <hr className="mt-8" />

                        <div className="px-6">
                            <div className="flex justify-end">
                                <Button type="submit">Salvar</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </AppLayout>
    );
}
