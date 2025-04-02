import { FiShoppingCart, FiUser } from 'react-icons/fi';
import React from 'react';

export const ShoppingCartIcon = (props: { className?: string }) => {
  const Icon = FiShoppingCart as React.ComponentType<{ className?: string }>;
  return <Icon {...props} />;
};

export const UserIcon = (props: { className?: string }) => {
  const Icon = FiUser as React.ComponentType<{ className?: string }>;
  return <Icon {...props} />;
};