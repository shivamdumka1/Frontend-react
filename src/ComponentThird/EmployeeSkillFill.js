import React from "react";
import MaterialTable from "material-table";
import { withRouter } from "react-router-dom";

const EmployeeSkillFill = () => {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Technology",
        field: "technology",
        lookup: {
          1: "Java",
          2: "SQL", 
          3: "JavaScript",
          4: "Python",
          5: "C",
          6: "C++",
          7: "Others"
        }
      },
      {
        title: "Experience(in years)",
        field: "experience",
        type: "numeric"
      },
      {
        title: "Rating",
        field: "rating",
        lookup: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10"
        }
      }
    ],
    data: []
  });

  return (
    <MaterialTable
      title="Please Rate Yourself"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
};

export default withRouter(EmployeeSkillFill);
