<template>
  <div class="page-topper topper-background">
    <TheBreadcrumbs></TheBreadcrumbs>
    <div>
      <div class="item">
        <div class="item-top">
          <div class="item-details">
            <p class="item-id">{ID:1234567890}</p>
            <div>
              <h1>
                <span>
                  {Item
                  <span class="item-title-tag-wrap">
                    title}
                    <WLStatusTag
                      value="{Status}"
                      variant="dot"
                      status="positive" />
                  </span>
                </span>
              </h1>
            </div>
            <p class="item-info">{Created date}</p>
            <div class="item-description">
              <h2>{Description}</h2>
              <p>{This is the description for this item }</p>
            </div>
          </div>
          <div class="item-actions">
            <WLButton
              variant="solid"
              icon-left="add">
              Add {item}</WLButton
            >
            <WLButton
              variant="default"
              icon="ellipsis-vertical-sharp"
              aria-label="Open menu"></WLButton>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style>
  @import '../assets/styles/styles.css';
</style>
