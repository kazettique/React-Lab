import { useState } from 'react';

function CollapseItem(props: { isEdit: boolean }) {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const { isEdit } = props;

  return (
    <div className="my-3">
      <div className="bg-neutral-300 h-12 w-full" onClick={() => setIsCollapse((prev) => !prev)}>
        <div>header</div>
        <div>
          isEdit: <span className={`${isEdit ? 'text-green-500' : 'text-red-500'}`}>{String(isEdit)}</span>
        </div>
      </div>
      {isCollapse && (
        <div className="bg-neutral-100 h-12 w-full">
          <div> more content here</div>
          <div>
            isEdit: <span className={`${isEdit ? 'text-green-500' : 'text-red-500'}`}>{String(isEdit)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function IndependentCollapse() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const render1 = (
    <div className="border border-blue-500 w-1/5">
      <div>render1</div>
      <div>(const, computed, useMemo)</div>
      <CollapseItem isEdit={isEdit} />
      <CollapseItem isEdit={isEdit} />
      {/* <CollapseItem isEdit={isEdit} /> */}
    </div>
  );

  const Render2 = () => (
    <div className="border border-red-500 w-1/5">
      <div>render2</div>
      <div>(JSX without props)</div>
      <CollapseItem isEdit={isEdit} />
      <CollapseItem isEdit={isEdit} />
      {/* <CollapseItem isEdit={isEdit} /> */}
    </div>
  );

  const Render3 = ({ _isEdit }: { _isEdit: boolean }) => (
    <div className="border border-red-500 w-1/5">
      <div>render3</div>
      <div>(JSX with props)</div>
      <CollapseItem isEdit={_isEdit} />
      <CollapseItem isEdit={_isEdit} />
    </div>
  );

  const render4 = () => (
    <div className="border border-blue-500 w-1/5">
      <div>render4</div>
      <div>(callback function without params)</div>
      <CollapseItem isEdit={isEdit} />
      <CollapseItem isEdit={isEdit} />
    </div>
  );

  const render5 = (_isEdit: boolean) => (
    <div className="border border-blue-500 w-1/5">
      <div>render5</div>
      <div>(callback function with params)</div>
      <CollapseItem isEdit={_isEdit} />
      <CollapseItem isEdit={_isEdit} />
    </div>
  );

  return (
    <div className="w-full h-full">
      <div className="flex">
        {isEdit ? (
          <>
            <button type="button" className="p-3 m-3 bg-slate-400 rounded shadow" onClick={() => setIsEdit(false)}>
              Cancel
            </button>
            <button type="button" className="p-3 m-3 bg-slate-400 rounded shadow" onClick={() => setIsEdit(false)}>
              Save
            </button>
          </>
        ) : (
          <button type="button" className="p-3 m-3 bg-slate-400 rounded shadow" onClick={() => setIsEdit(true)}>
            Edit
          </button>
        )}
      </div>
      <div className="p-3 flex gap-x-2">
        {render1}
        <Render2 />
        <Render3 _isEdit={isEdit} />
        {render4()}
        {render5(isEdit)}
      </div>
    </div>
  );
}
