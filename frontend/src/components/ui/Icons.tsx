import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import React from 'react';

export const HeartIcon = (props: { className?: string }) => {
  const Icon = FiHeart as React.ComponentType<{ className?: string }>;
  return <Icon {...props} />;
};

export const CartIcon = (props: { className?: string }) => {
  const Icon = FiShoppingCart as React.ComponentType<{ className?: string }>;
  return <Icon {...props} />;
};