import { computed, ComputedRef } from "vue";

export const useDayOfWeek = (): { dayOfWeek: ComputedRef<string> } => {
  const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const today: Date = new Date();

  const dayOfWeek: ComputedRef<string> = computed(() => {
    const dayIndex: number = today.getDay();
    return daysOfWeek[dayIndex];
  });

  return { dayOfWeek };
};
