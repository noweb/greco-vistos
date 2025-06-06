import { ContentBlock } from '@/components/content-block';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head, router, usePage } from '@inertiajs/react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { LinkIcon, Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
    title: z.string().min(2, 'O título deve ter pelo menos 2 caracteres'),
    image: z
        .instanceof(File, {
            message: 'A imagem é obrigatória',
        })
        .refine((file) => file.size <= 4095 * 1024, {
            message: 'A imagem deve ter no máximo 4MB',
        }),
    service: z.string().min(2, 'O serviço deve ter pelo menos 2 caracteres'),
    time: z.string().min(2, 'A duração é obrigatória'),
    price: z.string().min(1, 'O preço é obrigatório'),
    link: z.string().url('O link deve ser uma URL válida'),
    tags: z.string().min(1, 'Pelo menos uma tag é obrigatória'),
    is_active: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

interface Product {
    id: number;
    title: string;
    service: string;
    price: number;
    is_active: boolean;
    image: string;
    link: string;
    tags: string[];
}

export default function Products() {
    const props = usePage().props;
    const [products, setProducts] = useState<Product[]>([]);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            service: '',
            time: '',
            price: '',
            link: '',
            tags: '',
            is_active: true,
        },
    });

    function handleDelete(id: number) {
        if (!confirm('Tem certeza que deseja excluir este pacote?')) return;
        console.log('delete');
        router.delete(route('dashboard.pages.packages.destroy', { id }), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Pacote excluído com sucesso!');
                getProducts();
            },
            onError: (errors) => {
                console.error(errors);
                toast.error('Erro ao excluir o pacote.');
            },
        });
    }

    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        try {
            const formData = new FormData();

            formData.append('title', values.title);

            // Handle image file upload
            if (values.image instanceof File) {
                formData.append('image', values.image);
            } else {
                toast.error('Por favor, selecione uma imagem válida');
                return;
            }

            formData.append('service', values.service);
            formData.append('time', values.time);
            formData.append('price', values.price.toString());
            formData.append('link', values.link);
            formData.append('is_active', values.is_active ? '1' : '0');
            formData.append('tags', JSON.stringify(values.tags ?? []));

            router.post(route('dashboard.pages.packages.store'), formData, {
                forceFormData: true,
                headers: {
                    'X-Inertia': 'true',
                },
                onSuccess: () => {
                    toast.success('Pacote criado com sucesso');
                    form.reset();
                },
                onError: (errors) => {
                    console.error('Erros de validação:', errors);
                    toast.error('Erro ao criar pacote');
                },
            });

            toast.success('Pacote criado com sucesso');
            form.reset();

            setTimeout(() => {
                getProducts();
            }, 1000);
        } catch (error) {
            console.error(error);
            toast.error('Erro ao criar pacote');
        }
    };

    const getProducts = () => {
        fetch(route('dashboard.pages.packages.products'), {
            headers: {
                Accept: 'application/json',
                'X-CSRF-TOKEN': props.csrf_token as string,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="px-6 py-6">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                        encType="multipart/form-data"
                    >
                        <ContentBlock
                            section_title="Pacotes"
                            section_description="Esta seção é responsável pela edição do conteúdo da seção Pacotes da página inicial, incluindo título, descrição e detalhes."
                        >
                            <div className="col-span-full space-y-6">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Título</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite o título do pacote" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Imagem</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    onChange={(e) => field.onChange(e.target.files?.[0])}
                                                    onBlur={field.onBlur}
                                                    name={field.name}
                                                    ref={field.ref}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="service"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Serviço</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite o tipo de serviço" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="time"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Duração</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite a duração do pacote" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Preço</FormLabel>
                                            <FormControl>
                                                <Input placeholder="100,00" {...field} />
                                            </FormControl>
                                            <FormDescription>Apenas números e vírgula.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="link"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Link</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://www.google.com" {...field} />
                                            </FormControl>
                                            <FormDescription>A URL deve começar com http:// ou https://.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="tags"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tags</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Lorem, ipsum, dolor, sit, amet..." {...field} />
                                            </FormControl>
                                            <FormDescription>Digite as tags separadas por vírgula.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="is_active"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>Ativo</FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </ContentBlock>

                        <div className="px-6">
                            <div className="flex justify-end">
                                <Button type="submit">Salvar</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>

            <div className="px-6">
                <ContentBlock
                    section_title="Pacotes"
                    section_description="Esta seção é responsável pela edição do conteúdo da seção Pacotes da página inicial, incluindo título, descrição e detalhes."
                >
                    <div className="col-span-full rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Imagem</TableHead>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Serviço</TableHead>
                                    <TableHead>Preço</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Link</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((p) => (
                                    <TableRow key={p.id}>
                                        <TableCell>
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage
                                                    className="h-10 w-10 overflow-hidden rounded-full border object-cover"
                                                    src={p.image as string}
                                                    alt={p.title}
                                                />
                                            </Avatar>
                                        </TableCell>
                                        <TableCell>{p.title}</TableCell>
                                        <TableCell>{p.service}</TableCell>
                                        <TableCell>R$ {p.price}</TableCell>
                                        <TableCell>
                                            <Badge variant={p.is_active ? 'default' : 'secondary'}>{p.is_active ? 'Ativo' : 'Inativo'}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                                <LinkIcon className="h-4 w-4" />
                                            </a>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {/* <Button variant="ghost" size="icon">
                                                <PencilIcon className="h-4 w-4" />
                                            </Button> */}
                                            <Button variant="ghost" size="icon" type="button" onClick={() => handleDelete(p.id)}>
                                                <Trash2Icon className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </ContentBlock>
            </div>
        </AppLayout>
    );
}
