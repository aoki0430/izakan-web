export default function ShopDetail({ params }: { params: { id: string } }) {
  const shopId = params.id;

  return (
    <div>
      <Image
        src={short.thumbnail}
        alt={short.title}
        layout="intrinsic"
        width={249}
        height={442}
        className="object-cover"
        onClick={() => router.push(`/shoplist/${short.id}`)}
      />
    </div>
  );
}
