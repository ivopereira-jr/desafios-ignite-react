import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './styles';
import { useForm } from 'react-hook-form';

const searchPostsFormSchema = z.object({
	query: z.string()
});

type SearchPostsForm = z.infer<typeof searchPostsFormSchema>;

interface SearchPostsProps {
	postsLength: number;
	getPosts: (query?: string) => Promise<void>;
}

export function SearchPosts({ postsLength, getPosts }: SearchPostsProps) {
	const { register, handleSubmit } = useForm<SearchPostsForm>({
		resolver: zodResolver(searchPostsFormSchema)
	});

	async function handleSearchPosts(data: SearchPostsForm) {
		await getPosts(data.query);
	}

	return (
		<S.SearchPostsContainer onSubmit={handleSubmit(handleSearchPosts)}>
			<S.SearchPostsTitle>
				Publicações
				<span>{postsLength} Publicações</span>
			</S.SearchPostsTitle>

			<input type="text" placeholder="Buscar conteúdo" {...register('query')} />
		</S.SearchPostsContainer>
	);
}
