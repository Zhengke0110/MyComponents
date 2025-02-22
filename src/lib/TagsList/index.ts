export type TagVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export interface Tag {
  id: string | number;
  name: string;
}

export interface EnhancedTag extends Tag {
  variant?: TagVariant;
  color?: string;
}

export interface TagProps {
  text: string;
  variant?: TagVariant;
  customColor?: string;
  clickable?: boolean;
  size?: "sm" | "md" | "lg";
}

const COLOR_PALETTE = [
  'bg-blue-500 text-white',
  'bg-red-500 text-white',
  'bg-green-500 text-white',
  'bg-cyan-500 text-white',
  'bg-yellow-500 text-white',
  'bg-purple-500 text-white'
];

export const getRandomColor = () => {
  return COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
};

export { default as Tag } from "./Tag.vue";
export { default as TagsList } from "./TagsList.vue";
