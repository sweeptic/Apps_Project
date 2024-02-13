<script>
  import { createEventDispatcher } from 'svelte';

  /**
   * @type {string}
   */
  let inputValue;
  // @ts-ignore
  export let itemList;
  export let clearInput = false;
  export let filterField = '';

  $: disabled = !itemList;

  const dispatch = createEventDispatcher();

  // @ts-ignore
  $: if (itemList && clearInput === true) {
    console.log('selectedUser', itemList);
    clearInputHandler();
  }

  const clearInputHandler = () => (inputValue = '');

  const onInputChange = (/** @type {any} */ event) => {
    inputValue = event.target.value;
    onFilter(event.target.value);
  };

  const onFilter = (/** @type {any} */ ev) => {
    // @ts-ignore
    if (itemList) {
      // @ts-ignore
      const filtered = [...itemList].filter((item) => item[filterField].includes(ev));
      dispatch('filteredList', [...filtered]);
    }
  };
</script>

<div>
  <input type="text" on:input={onInputChange} bind:value={inputValue} {disabled} />
</div>
