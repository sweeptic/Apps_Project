<script>
  import { createEventDispatcher } from 'svelte';

  let inputValue;

  export let itemList;
  export let clearInput = false;
  export let filterField = '';

  $: disabled = !itemList;

  const dispatch = createEventDispatcher();

  $: if (itemList && clearInput === true) {
    console.log('selectedUser', itemList);
    clearInputHandler();
  }

  const clearInputHandler = () => (inputValue = '');

  const onInputChange = (event) => {
    inputValue = event.target.value;
    onFilter(event.target.value);
  };

  const onFilter = (ev) => {
    if (itemList) {
      const filtered = [...itemList].filter((item) => item[filterField].includes(ev));
      dispatch('filteredList', [...filtered]);
    }
  };
</script>

<div>
  <input type="text" on:input={onInputChange} bind:value={inputValue} {disabled} />
</div>
