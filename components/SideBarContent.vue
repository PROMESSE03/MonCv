<template>
  <div
    class="s_overlay"
    :style="{ display: navFunction.sidebar ? 'block' : 'none' }"
    @click="navFunction.sidebarToggle(false)"
  ></div>
  <div class="content-sidebar" :class="navFunction.sidebar ? 'active' : ''">
    <div class="sidebar-wrap search-form">
      <aside id="secondary" class="widget-area">
        <section class="widget widget_recent_entries">
          <h2 class="widget-title">
            <span class="widget-title-span"
              >Divertissement</span
            >
          </h2>
          <ul>
            <li>
              <a href="#">Sport (Football , marche)</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Animé</a>
            </li>
            <li>
              <a href="#">Code</a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
    <span class="close" @click="navFunction.sidebarToggle(false)"></span>
  </div>
</template>

<script>
import { navFunction } from "../utils/navFunction";
</script>
