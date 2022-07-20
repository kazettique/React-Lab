export default function SafariAbsoluteTest() {
  const thArr = ['TH1', 'TH2', 'TH3', 'TH4', 'TH5', 'TH6'];

  const tdClass = /*style*/ 'table-cell align-middle p-2.5 border border-neutral-200';

  const renderTR = (
    <div className="relative table-row">
      <div className={tdClass}>1</div>
      <div className={tdClass}>2</div>
      <div className={tdClass}>3</div>
      <div className={tdClass}>4</div>
      <div className={tdClass}>5</div>
      <div className={tdClass}>6</div>
    </div>
  );

  const trList = Array(10)
    .fill('')
    .map(() => renderTR);

  const renderTH = (
    <div className="table-header-group sticky z-50 top-[-1px]">
      <div className="table-row">
        {thArr.map((th) => (
          <div
            key={th}
            className="table-cell bg-neutral-200 p-2.5 border border-solid border-neutral-200 first:sticky first:left-0 last:sticky last:-right-[1px]"
          >
            <div className="text-neutral-600 text-center">{th}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRowMask = (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <div className="bg-red-600 opacity-50 flex items-center justify-center w-full h-full">
        <div className="p-4 rounded-lg flex">
          <div>Deleted</div>
        </div>
      </div>
    </div>
  );

  return (
    <div data-comp="SafariAbsoluteTest" className="max-h-[50vh] w-full overflow-auto">
      <div className="table w-full border-collapse border border-neutral-200">
        {renderTH}
        <div className="relative table-row">
          <div className={tdClass}>1</div>
          <div className={tdClass}>2</div>
          <div className={tdClass}>3</div>
          <div className={tdClass}>4</div>
          <div className={tdClass}>5</div>
          <div className={tdClass}>6</div>
          <div style={{ display: 'inherit' }}>{renderRowMask}</div>
        </div>

        <div className="table-row-group">{trList}</div>

        <div className="relative table-row">
          <div className={tdClass}>1</div>
          <div className={tdClass}>2</div>
          <div className={tdClass}>3</div>
          <div className={tdClass}>4</div>
          <div className={tdClass}>5</div>
          <div className={tdClass}>6</div>
          <div style={{ display: 'inherit' }}>{renderRowMask}</div>
        </div>
      </div>
    </div>
  );
}
