interface StatusChipProps {
  status: string;
}

export function StatusChip({ status }: StatusChipProps) {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'contacted':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'qualified':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'negotiation':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'won':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'lost':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${getStatusStyles(status)}`}>
      • {status}
    </span>
  );
}