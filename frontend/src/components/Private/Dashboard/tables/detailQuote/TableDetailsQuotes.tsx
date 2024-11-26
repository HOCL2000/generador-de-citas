import { UseAdminStore } from '@/store/adminStore';
import { DataTableDetails } from './DataTableDetails';
import { columnsdetails } from './ColumnsDetails';

const TableDetailsQuotes = () => {
  const detailsDay = UseAdminStore((state) => state.daySelected);

  return (
    <div className="p-4">
      <div className="w-full shadow rounded">
        {detailsDay?.date && detailsDay.disponibilidad ? (
            <>
                <DataTableDetails columns={columnsdetails} data={detailsDay.disponibilidad} />
            </>
        ) : (
          <p>No hay disponibilidad para la fecha seleccionada.</p>
        )}
      </div>
    </div>
  );
};

export default TableDetailsQuotes;
