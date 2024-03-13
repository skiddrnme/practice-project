<!-- <template>
  <router-view />
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '@/store/user.js';
import { useRoute, useRouter } from 'vue-router';
import { authRoutes, publicRoutes } from '../router/index.js';
import { SHOP_ROUTE } from '../utils/contans.js';

export default {
  setup() {
    
    const route = useRoute();
    const router = useRouter();
    const users = useUserStore()

    const user = computed(() => users);

    router.beforeEach((to, from, next) => {
      const isAuthRoute = authRoutes.some(route => route.path === to.path);
      if (isAuthRoute && !user.value.isAuth) {
        next({ path: SHOP_ROUTE });
      } else {
        next();
      }
    });

    return {
      user
    };
  }
};
</script> -->
