export const Loader = ({ size = 25 }: { size?: number }) => {
  return (
    <div 
  style={{ width: size, height: size }}
  className="w-[size] h-[size] border-4 border-white border-opacity-50 rounded-full animate-spin"
/>
  );
};
