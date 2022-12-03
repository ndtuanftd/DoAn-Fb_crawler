import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ProfileContext from '../../context/ProfileContext';

const columns = [
  { field: 'user_id', headerName: 'User ID', width: 200 },
  { field: 'username', headerName: 'Username', width: 255 },
];

const Datatable = () => {
  const { members, setMembers } = useContext(ProfileContext);

  return (
    <div>
      {/* <div className='d-flex w-100 border-bottom'>
        <div style={{ flex: 1 }} className='m-2 border-right'>
          ID
        </div>
        <div style={{ flex: 1 }} className='m-2 border-right'>
          User ID
        </div>
        <div style={{ flex: 4 }} className='m-2 '>
          Username
        </div>
      </div>
      {members.length === 0 ? (
        <div
          style={{ justifyContent: 'center', alignItems:'stretch' }}
          className='d-flex w-100'
        >
          No profile crawled...
        </div>
      ) : (
        members.map((mem) => (
          <div className='d-flex w-100'>
            <div style={{ flex: 1 }} className='m-2 border-right'>
              {mem.id}
            </div>
            <div style={{ flex: 1 }} className='m-2 border-right'>
              {mem.user_id}
            </div>
            <div style={{ flex: 4 }} className='m-2 '>
              {mem.username}
            </div>
          </div>
        ))
      )} */}
      <DataGrid
        rows={members}
        columns={columns}
        pageSize={10}
        autoHeight={true}
        rowsPerPageOptions={[10]}
        getRowId={(rows) => {
          return rows.user_id ? rows.user_id : 0;
        }}
      />
    </div>
  );
};

export default Datatable;
