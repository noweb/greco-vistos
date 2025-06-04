import { ContentBlock } from '@/components/content-block';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2Icon } from 'lucide-react';

const formSchema = z.object({
    //  SEO
    slug: z.string().nullable(),
    page_title: z.string().min(2, {
        message: 'O título da página deve ter pelo menos 2 caracteres.',
    }),
    page_description: z
        .string()
        .min(2, {
            message: 'A descrição da página deve ter pelo menos 2 caracteres.',
        })
        .max(160, {
            message: 'A descrição da página deve ter no máximo 160 caracteres.',
        }),

    //  Conteúdo Banner
    banner_title: z.string().min(2, {
        message: 'O título do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_description: z.string().min(2, {
        message: 'A descrição do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_image: z.instanceof(File, {
        message: 'A imagem do banner deve ser um arquivo.',
    }),
    banner_image_button_text: z.string().min(2, {
        message: 'O texto do botão da imagem do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_image_button_link: z.string().min(2, {
        message: 'O link do botão da imagem do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_button_text: z.string().min(2, {
        message: 'O texto do botão do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_button_link: z.string().min(2, {
        message: 'O link do botão do banner deve ter pelo menos 2 caracteres.',
    }),

    banner_image_title: z.string().min(2, {
        message: 'O título da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_image_description: z.string().min(2, {
        message: 'A descrição da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),

    banner_section_details_1_title: z
        .number({
            required_error: 'O título da seção de detalhes 1 é obrigatório.',
        })
        .min(1, {
            message: 'O título da seção de detalhes 1 deve ser um número maior que 0.',
        }),
    banner_section_details_1_description: z.string().min(2, {
        message: 'A descrição da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_section_details_2_title: z
        .number({
            required_error: 'O título da seção de detalhes 2 é obrigatório.',
        })
        .min(1, {
            message: 'O título da seção de detalhes 2 deve ser um número maior que 0.',
        }),
    banner_section_details_2_description: z.string().min(2, {
        message: 'O título da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_section_details_3_title: z
        .number({
            required_error: 'O título da seção de detalhes 3 é obrigatório.',
        })
        .min(1, {
            message: 'O título da seção de detalhes 3 deve ser um número maior que 0.',
        }),
    banner_section_details_3_description: z.string().min(2, {
        message: 'A descrição da seção de detalhes do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_video_title: z.string().min(2, {
        message: 'O título do vídeo do banner deve ter pelo menos 2 caracteres.',
    }),
    banner_video_image: z.instanceof(File, {
        message: 'A imagem do vídeo do banner deve ser um arquivo.',
    }),
    banner_video_url: z.string().min(2, {
        message: 'A URL do vídeo do banner deve ter pelo menos 2 caracteres.',
    }),

    // CTA
    cta_text_1: z.string().min(2, {
        message: 'O texto 1 do CTA deve ter pelo menos 2 caracteres.',
    }),
    cta_text_2: z.string().min(2, {
        message: 'O texto 2 do CTA deve ter pelo menos 2 caracteres.',
    }),

    // WhoWorks
    who_works_section_intro_highlight: z.string().min(2, {
        message: 'O destaque da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_intro_title: z.string().min(2, {
        message: 'O título da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_intro_description: z.string().min(2, {
        message: 'A descrição da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_title: z.string().min(2, {
        message: 'O título da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_description: z.string().min(2, {
        message: 'A descrição da seção de como funciona deve ter pelo menos 2 caracteres.',
    }),
    who_works_image: z.instanceof(File, {
        message: 'A imagem da seção de como funciona deve ser um arquivo.',
    }),
    who_works_details: z
        .array(
            z.object({
                title: z.string().min(2, {
                    message: 'O título da seção de como funciona deve ter pelo menos 2 caracteres.',
                }),
                description: z.string().min(2, {
                    message: 'A descrição da seção de como funciona deve ter pelo menos 2 caracteres.',
                }),
            }),
        )
        .min(1, {
            message: 'A seção de como funciona deve ter pelo menos 1 item.',
        }),

    // Destinations
    destinations_section_intro_highlight: z.string().min(2, {
        message: 'O destaque da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_title: z.string().min(2, {
        message: 'O título da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_description: z.string().min(2, {
        message: 'A descrição da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_button_text: z.string().min(2, {
        message: 'O texto do botão da seção de destinos deve ter pelo menos 2 caracteres.',
    }),
    destinations_button_link: z.string().min(2, {
        message: 'O link do botão da seção de destinos deve ter pelo menos 2 caracteres.',
    }),

    destinations_details: z
        .array(
            z.object({
                title: z.string().min(2, {
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
    packages_section_intro_highlight: z.string().min(2, {
        message: 'O destaque da seção de pacotes deve ter pelo menos 2 caracteres.',
    }),
    packages_title: z.string().min(2, {
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
    footer_title: z.string().min(2, {
        message: 'O título da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_description: z.string().min(2, {
        message: 'A descrição da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_button_text: z.string().min(2, {
        message: 'O texto do botão da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_button_link: z.string().min(2, {
        message: 'O link do botão da seção de rodapé deve ter pelo menos 2 caracteres.',
    }),
    footer_details: z.array(
        z.object({
            title: z.string().min(2, {
                message: 'O título da seção de rodapé deve ter pelo menos 2 caracteres.',
            }),
            link: z.string().min(2, {
                message: 'O link da seção de rodapé deve ter pelo menos 2 caracteres.',
            }),
        }),
    ),
    new_package: z.object({
        title: z.string(),
        image: z.instanceof(File).optional(),
        tags: z.array(z.string()),
        service: z.string(),
        time: z.string(),
        price: z.number(),
        link: z.string(),
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            slug: '',
            page_title: '',
            page_description: '',
            banner_title: '',
            banner_description: '',
            banner_image: undefined,
            banner_image_button_text: '',
            banner_image_button_link: '',
            banner_button_text: '',
            banner_button_link: '',
            banner_section_details_1_title: undefined,
            banner_section_details_1_description: '',
            banner_section_details_2_title: undefined,
            banner_section_details_2_description: '',
            banner_section_details_3_title: undefined,
            banner_section_details_3_description: '',
            banner_video_title: '',
            banner_video_image: undefined,
            banner_video_url: '',
            cta_text_1: '',
            cta_text_2: '',
            who_works_section_intro_highlight: '',
            who_works_intro_title: '',
            who_works_intro_description: '',
            who_works_title: '',
            who_works_description: '',
            who_works_image: undefined,
            who_works_details: [
                {
                    title: '',
                    description: '',
                },
            ],
            destinations_section_intro_highlight: '',
            destinations_title: '',
            destinations_description: '',
            destinations_button_text: '',
            destinations_button_link: '',
            destinations_details: [
                {
                    title: '',
                    image: undefined,
                },
                {
                    title: '',
                    image: undefined,
                },
                {
                    title: '',
                    image: undefined,
                },
                {
                    title: '',
                    image: undefined,
                },
                {
                    title: '',
                    image: undefined,
                },
                {
                    title: '',
                    image: undefined,
                },
            ],
            packages_section_intro_highlight: '',
            packages_title: '',
            packages_details: [],
            footer_title: '',
            footer_description: '',
            footer_button_text: '',
            footer_button_link: '',
            footer_details: [],
            new_package: {
                title: '',
                image: undefined,
                tags: [],
                service: '',
                time: '',
                price: 0,
                link: '',
            },
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="px-6 py-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">cage.com.br/</div>
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
                                            <Textarea
                                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Este é a descrição do banner que será exibida no navegador.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="banner_image"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Imagem do banner</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
                                        </FormControl>
                                        <FormDescription>Esta é a imagem do banner que será exibida no navegador.</FormDescription>
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

                                {form.watch('who_works_details')?.map((_, index) => (
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
                                        <FormItem>
                                            <FormLabel>Detalhes dos destinos</FormLabel>
                                            <FormControl>
                                                <div className="grid grid-cols-1 space-y-2 gap-x-2 md:grid-cols-3">
                                                    {field.value.map((_, index) => (
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
                        >
                            <FormField
                                control={form.control}
                                name="packages_section_intro_highlight"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Destaque da seção</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o destaque da seção de pacotes.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="packages_title"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        <FormLabel>Título da seção</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lorem ipsum dolor sit amet" {...field} />
                                        </FormControl>
                                        <FormDescription>Este é o título da seção de pacotes.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="packages_details"
                                render={({ field }) => (
                                    <FormItem className="col-span-full">
                                        {/* Removido o botão "Adicionar detalhe" para evitar confusão */}
                                        <div className="mb-4 flex items-center justify-between">
                                            <h3 className="text-lg font-medium">Detalhes dos pacotes</h3>
                                        </div>
                                        <FormControl>
                                            <>
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <FormField
                                                            control={form.control}
                                                            name="new_package.title"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Título do pacote</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Título do pacote" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="new_package.image"
                                                            render={({ field: { onChange, ...field } }) => (
                                                                <FormItem>
                                                                    <FormLabel>Imagem</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="file"
                                                                            accept="image/*"
                                                                            onChange={(e) => onChange(e.target.files?.[0])}
                                                                            onBlur={field.onBlur}
                                                                            name={field.name}
                                                                            ref={field.ref}
                                                                            disabled={field.disabled}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="new_package.tags"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Tags</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Tags separadas por vírgula"
                                                                            onChange={(e) =>
                                                                                field.onChange(e.target.value.split(',').map((tag) => tag.trim()))
                                                                            }
                                                                            value={Array.isArray(field.value) ? field.value.join(', ') : ''} // Garante que field.value é um array
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="new_package.service"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Atendimento</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Tipo de atendimento" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="new_package.time"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Duração</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Duração do pacote" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="new_package.price"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Preço</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            placeholder="Preço do pacote"
                                                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                                                            value={field.value}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="new_package.link"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Link</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Link do pacote" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        onClick={() => {
                                                            const newPackage = form.getValues('new_package');
                                                            const currentDetails = form.getValues('packages_details') || [];

                                                            // Adiciona o novo pacote à lista
                                                            form.setValue('packages_details', [...currentDetails, newPackage]);

                                                            // Limpa os campos do novo pacote para o próximo item
                                                            form.setValue('new_package', {
                                                                title: '',
                                                                image: undefined, // undefined é mais apropriado para limpar campos de arquivo
                                                                tags: [],
                                                                service: '',
                                                                time: '',
                                                                price: 0,
                                                                link: '',
                                                            });
                                                        }}
                                                    >
                                                        Adicionar à tabela
                                                    </Button>
                                                </div>

                                                <div className="mt-4 rounded-md border">
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead>Título</TableHead>
                                                                <TableHead>Imagem</TableHead>
                                                                <TableHead>Tags</TableHead>
                                                                <TableHead>Atendimento</TableHead>
                                                                <TableHead>Duração</TableHead>
                                                                <TableHead>Preço</TableHead>
                                                                <TableHead>Link</TableHead>
                                                                <TableHead className="w-[100px]">Ações</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            {field.value.map((item, index) => (
                                                                <TableRow key={index}>
                                                                    <TableCell>{item.title}</TableCell>
                                                                    <TableCell>{item.image?.name}</TableCell>
                                                                    <TableCell>{item.tags?.join(', ')}</TableCell>{' '}
                                                                    {/* Usa optional chaining para tags */}
                                                                    <TableCell>{item.service}</TableCell>
                                                                    <TableCell>{item.time}</TableCell>
                                                                    <TableCell>{item.price}</TableCell>
                                                                    <TableCell>{item.link}</TableCell>
                                                                    <TableCell>
                                                                        <Button
                                                                            type="button"
                                                                            variant="ghost"
                                                                            size="icon"
                                                                            onClick={() => {
                                                                                const currentDetails = form.getValues('packages_details');
                                                                                form.setValue(
                                                                                    'packages_details',
                                                                                    currentDetails.filter((_, i) => i !== index),
                                                                                );
                                                                            }}
                                                                        >
                                                                            <Trash2Icon className="h-4 w-4" />
                                                                        </Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </>
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
