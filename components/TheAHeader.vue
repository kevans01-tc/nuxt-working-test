<template>
  <div class="page-topper">
    <div class="item-top">
      <div class="item-details">
        <h1>{Title} <span class="x-small semi-bold">{number}</span></h1>
        <h2>{Description of this area}</h2>
      </div>

      <div class="item-create">
        <WLButton
          variant="solid"
          icon-left="add">
          New {item}</WLButton
        >
      </div>
    </div>
    <div class="search">
      <input
        class="search-input"
        type="text" />
      <div class="item-actions">
        <WLButton
          variant="default"
          icon-left="funnel-outline">
          Filter</WLButton
        >

        <select>
          <option>10 per page</option>
          <option>10 per page</option>
          <option>10 per page</option>
          <option>10 per page</option>
        </select>
      </div>
    </div>
  </div>
</template>
