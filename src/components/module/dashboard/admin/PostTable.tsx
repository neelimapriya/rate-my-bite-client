"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, CheckCircle, ChevronLeft, ChevronRight, ImageIcon, MoreHorizontal, X, XCircle } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IPost } from "@/types"
import { useRouter, useSearchParams } from "next/navigation"
import { PostUpdateModal } from "./modal/UpdatePostStatus"
import { toast } from "sonner"
import { updatePost } from "@/services/dashboard/admin"
import { ViewPostDetailsModal } from "./modal/ViewPostDetailsModal"
import Image from "next/image"
// import { updatePost } from "@/services/posts"




interface PostsTableProps {
    data: IPost[]
    meta: {
        page: number
        limit: number
        total: number
        totalPage: number
    }
    isPaginate?: boolean
}

export function PostsTable({ data, meta, isPaginate = true }: PostsTableProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter();
    const searchParams = useSearchParams();
    useEffect(() => {
        if (isPaginate && Object.keys(meta).length > 0) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", String(currentPage));
            router.push(`?${params.toString()}`);
        }

    }, [currentPage, router, searchParams, meta, isPaginate])
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price)
    }

    // Handle pagination
    const goToNextPage = () => {
        if (isPaginate && Object.keys(meta).length > 0) {

            if (currentPage < meta?.totalPage) {
                setCurrentPage(currentPage + 1)
            }
        }
    }
    const goToPreviousPage = () => {
        if (isPaginate && Object.keys(meta).length > 0) {

            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)

            }
        }
    }

    // Get status badge variant
    const getStatusVariant = (status: string) => {
        switch (status) {
            case "APPROVED":
                return "bg-green-50 text-green-500"
            case "PENDING":
                return "bg-yellow-50 text-yellow-500"
            case "REJECTED":
                return "bg-red-100 text-red-500"
            default:
                return ""
        }
    }
    const onDelete = async (id: string, data: Partial<IPost>) => {
        console.log(id, data)
        const toastId = toast.loading("Updating status...")
        try {
            const result = await updatePost(id, data)
            console.log(result)
            if (result?.success) {
                toast.success(result?.message || "Status updated", { id: toastId })
            } else {
                toast.error(result?.message || "Status not updated", { id: toastId })
            }
        } catch (error) {
            console.log(error)
        }
    }
    const markAsPremium = async (post: IPost, isTrue: boolean) => {
        const toastId = toast.loading("Marking as premium...")
        if (isTrue && isTrue === post?.isPremium) {
            toast.error("Already marked as premium", { id: toastId })
            return
        }
        if (!isTrue && isTrue === post?.isPremium) {
            toast.error("Already marked as not premium", { id: toastId })
            return
        }
        try {
            const result = await updatePost(post?.id, { isPremium: isTrue })
            console.log({ result })
            if (result?.success) {
                toast.success(result?.message || "Marked as premium", { id: toastId })
            } else {
                toast.error(result?.message || "Not marked as premium", { id: toastId })
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[250px]">Title</TableHead>
                            <TableHead>Category</TableHead>

                            <TableHead>Price</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Premium</TableHead>
                            <TableHead>Mark as premium</TableHead>

                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((post) => (
                            <TableRow key={post?.id}>
                                <TableCell className="font-medium flex gap-3">
                                    {post?.image ? (
                                        <div className="relative h-10 w-10 overflow-hidden rounded-md">
                                            <Image
                                                src={post?.image}
                                                alt={post?.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                                            <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                    )}
                                    {post?.title}
                                </TableCell>
                                <TableCell>{post?.category?.name}</TableCell>

                                <TableCell>{formatPrice(post?.price)}</TableCell>
                                <TableCell>
                                    <Badge className={`rounded-full ${getStatusVariant(post?.status)}`}>{post?.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    {post?.isPremium ? (
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                        <XCircle className="h-5 w-5 text-gray-400" />
                                    )}
                                </TableCell>
                                <TableCell className="flex items-center gap-1">

                                    <button onClick={() => markAsPremium(post, false)} className="p-0.5 rounded-full bg-red-50 hover:bg-red-100 cursor-pointer text-red-600">
                                        <X />
                                    </button>
                                    <button onClick={() => markAsPremium(post, true)} className="p-0.5 rounded-full cursor-pointer bg-green-50 hover:bg-green-100 text-green-600">
                                        <Check />
                                    </button>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu >
                                        <DropdownMenuTrigger className="cursor-pointer" asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="flex flex-col gap-0">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <ViewPostDetailsModal post={post} />
                                            <PostUpdateModal post={post} onSubmit={onDelete} />

                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {
                isPaginate && Object.keys(meta).length > 0 &&
                <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                        Showing {data?.length} of {meta?.total} posts
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={goToPreviousPage}
                            className="cursor-pointer"
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous page</span>
                        </Button>
                        <div className="text-sm font-medium">
                            Page {currentPage} of {meta?.totalPage}
                        </div>
                        <Button variant="outline" size="sm" onClick={goToNextPage} disabled={currentPage === meta?.totalPage}>
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next page</span>
                        </Button>
                    </div>
                </div>
            }

        </div>
    )
}
