import { useCallback, useState } from 'react';

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

function Render8({ _isEdit }: { _isEdit: boolean }) {
  return (
    <div className="border-2 border-blue-500 w-1/5">
      <div className="font-bold">render8</div>
      <div className="font-bold">(JSX with props, outside component)</div>
      <CollapseItem isEdit={_isEdit} />
      <CollapseItem isEdit={_isEdit} />
    </div>
  );
}

export default function IndependentCollapse() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const render1 = (
    <div className="border-2 border-blue-500 w-1/5">
      <div className="font-bold">render1</div>
      <div className="font-bold">(const, computed, useMemo)</div>
      <CollapseItem isEdit={isEdit} />
      <CollapseItem isEdit={isEdit} />
    </div>
  );

  const Render2 = () => (
    <div className="border-2 border-red-500 w-1/5">
      <div className="font-bold">render2</div>
      <div className="font-bold">(JSX without props)</div>
      <CollapseItem isEdit={isEdit} />
      <CollapseItem isEdit={isEdit} />
    </div>
  );

  const Render3 = useCallback(
    () => (
      <div className="border-2 border-red-500 w-1/5">
        <div className="font-bold">render3</div>
        <div className="font-bold">(JSX without props, with useCallback)</div>
        <CollapseItem isEdit={isEdit} />
        <CollapseItem isEdit={isEdit} />
      </div>
    ),
    [isEdit]
  );

  const Render4 = ({ _isEdit }: { _isEdit: boolean }) => (
    <div className="border-2 border-red-500 w-1/5">
      <div className="font-bold">render4</div>
      <div className="font-bold">(JSX with props)</div>
      <CollapseItem isEdit={_isEdit} />
      <CollapseItem isEdit={_isEdit} />
    </div>
  );

  const Render5 = useCallback(
    ({ _isEdit }: { _isEdit: boolean }) => (
      <div className="border-2 border-blue-500 w-1/5">
        <div className="font-bold">render5</div>
        <div className="font-bold">(JSX with props, with useCallback)</div>
        <CollapseItem isEdit={_isEdit} />
        <CollapseItem isEdit={_isEdit} />
      </div>
    ),
    []
  );

  const render6 = () => (
    <div className="border-2 border-blue-500 w-1/5">
      <div className="font-bold">render6</div>
      <div className="font-bold">(callback function without params)</div>
      <CollapseItem isEdit={isEdit} />
      <CollapseItem isEdit={isEdit} />
    </div>
  );

  const render7 = (_isEdit: boolean) => (
    <div className="border-2 border-blue-500 w-1/5">
      <div className="font-bold">render7</div>
      <div className="font-bold">(callback function with params)</div>
      <CollapseItem isEdit={_isEdit} />
      <CollapseItem isEdit={_isEdit} />
    </div>
  );

  return (
    <div data-comp="IndependentCollapse" className="w-full h-full">
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
      <div className="p-3 flex gap-2 flex-wrap">
        {render1}
        <Render2 />
        <Render3 />
        <Render4 _isEdit={isEdit} />
        <Render5 _isEdit={isEdit} />
        {render6()}
        {render7(isEdit)}
        <Render8 _isEdit={isEdit} />
      </div>
    </div>
  );
}
