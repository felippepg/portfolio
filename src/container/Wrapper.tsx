function Wrapper({ children }: any) {
  return (
    <div className="mx-auto w-340 sm_device:w-450 tablet:w-700 desktop:w-1000 flex justify-center">
      {children}
    </div>
  );
}

export default Wrapper;
