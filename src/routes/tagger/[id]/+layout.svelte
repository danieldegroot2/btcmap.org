<script>
	import { page } from '$app/stores';
	import { users, userError, events, eventError, elements, elementError } from '$lib/store';
	import { errToast } from '$lib/utils';
	import { LoadingSplash } from '$comp';

	// alert for user errors
	$: $userError && errToast($userError);
	// alert for event errors
	$: $eventError && errToast($eventError);
	// alert for element errors
	$: $elementError && errToast($elementError);
</script>

<svelte:head>
	<title>{$page.data.username} - BTC Map Supertagger</title>
	<meta property="og:image" content="https://btcmap.org/images/og/supertagger.png" />
	<meta property="twitter:title" content="{$page.data.username} - BTC Map Supertagger" />
	<meta property="twitter:image" content="https://btcmap.org/images/og/supertagger.png" />
</svelte:head>

{#if $users && $users.length && $events && $events.length && $elements && $elements.length}
	<slot />
{:else}
	<LoadingSplash page="profile" />
{/if}
