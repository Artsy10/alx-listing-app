export interface CardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onAction?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
