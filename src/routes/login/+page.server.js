import { login, post } from '$lib/utils';

export async function POST({ setHeaders, request }) {
	let user = Object.fromEntries(await request.formData());
  await login(user, setHeaders);

	return { location: `/${data.username}/dashboard` };
}
