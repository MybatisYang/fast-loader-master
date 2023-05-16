package cn.fastloader.web.service;

import java.util.ArrayList;

import cn.fastloader.web.model.TChunkInfo;

/**
 * 文件块处理
 * @author 洋葱骑士
 *
 */
public interface ChunkService {
    /**
     * 保存文件块
     *
     * @param chunk
     */
    public int saveChunk(TChunkInfo chunk);

    /**
     * 检查文件块是否存在
     *
     * @param identifier
     * @param chunkNumber
     * @return
     */
    boolean checkChunk(String identifier, Integer chunkNumber);
    
    /**
     * 查询哪些文件块已经上传
     * @param chunk
     * @return
     */
    public ArrayList<Integer> checkChunk(TChunkInfo chunk);
}
