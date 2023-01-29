import type { Ref } from "vue-demi";

/**
 * Void function
 */
export type Fn = () => void;

/**
 * Maybe it's a ref, or a plain value
 */
export type MaybeRef<T> = T | Ref<T>;
